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

  def handle_in({:after_join, state}, socket) do
    push socket, "initial_state", state
    {:noreply, socket}
  end

  def handle_in("unregister_player", playerId, socket) do
    %{session_name: session_name} = socket.assigns
    Server.unregister_player(session_name, playerId)
    broadcast! socket, "player_unregistered", playerId
    {:noreply, socket}
  end

  def handle_in("register_player", player, socket) do
    %{session_name: session_name} = socket.assigns
    Server.register_player(session_name, player)
    broadcast! socket, "player_registered", player
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
