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
end
