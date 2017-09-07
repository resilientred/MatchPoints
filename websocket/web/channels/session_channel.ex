defmodule MatchPoints.SessionChannel do
  use MatchPoints.Web, :channel

  alias MatchPoints.Supervisor
  alias MatchPoints.Server

  def join("session:" <> _id, _payload, socket) do
    case Supervisor.initialize_if_havent(socket.assigns.session_name, socket.assigns.session_token) do
      {:ok, state} ->
        send self, {:after_join, state}
        {:ok, socket}
      {:error, _} ->
        {:error, %{reason: "Unable to verify user."}}
    end
  end

  def terminate(_reason, _socket) do
    :ok
  end

  def handle_info({:after_join, state}, socket) do
    push socket, "INITIAL_STATE", state
    {:noreply, socket}
  end

  def handle_in("UNREGISTER_PLAYER", playerId, socket) do
    %{session_name: session_name} = socket.assigns
    Server.unregister_player(session_name, playerId)
    broadcast! socket, "PLAYER_UNREGISTERED", playerId
    {:noreply, socket}
  end

  def handle_in("REGISTER_PLAYER", player, socket) do
    %{session_name: session_name} = socket.assigns
    Server.register_player(session_name, player)
    broadcast! socket, "PLAYER_REGISTERED", player
    {:noreply, socket}
  end

  # def handle_out("user_registered", data, socket) do
  #   push socket, "user_registered", data
  #   {:noreply, socket}
  # end

  # def handle_out("user_unregistered", data, socket) do
  #   push socket, "user_unregistered", data
  #   {:noreply, socket}
  # end
end
