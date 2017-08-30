defmodule MatchPoints.Server do
  use GenServer

  def start_link(name) do
    GenServer.start_link(__MODULE__, [], name: via_tuple(name))
  end

  def set_players(session_name, players) do
    GenServer.cast(via_tuple(session_name), {:set_players, players})
  end

  def get_players(session_name) do
    GenServer.call(via_tuple(session_name), :get_players)
  end

  def register_player(session_name, player) do
    GenServer.cast(via_tuple(session_name), {:register_player, player})
  end

  def unregister_player(session_name, playerId) do
    GenServer.cast(via_tuple(session_name), {:unregister_player, playerId})
  end

  defp via_tuple(name) do
    {:via, MatchPoints.SessionRegistry, {:session, name}}
  end

  def init(messages) do
    {:ok, messages}
  end

  def handle_cast({:set_players, players}, _state) do
    {:noreply, players}
  end

  def handle_call(:get_players, _from, state) do
    {:reply, state}
  end

  def handle_cast({:register_player, player}, state) do
    {:noreply, state ++ [player]}
  end

  def handle_cast({:unregister_player, playerId}, state) do
    {:noreply, Enum.reject(state, fn(p) -> p["id"] == playerId end)}
  end
end
