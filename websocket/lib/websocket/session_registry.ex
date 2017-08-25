defmodule MatchPoints.SessionRegistry do
  use GenServer

  def start_link do
    GenServer.start_link(__MODULE__, nil, name: :registry)
  end

  def whereis_name(session_name) do
    GenServer.call(:registry, {:whereis_name, session_name})
  end

  def register_name(session_name) do
    GenServer.call(:registry, {:register_name, room_name, pid})
  end

  def unregister_name(session_name) do
    GenServer.cast(:registry, {:unregister_name, room_name})
  end

  def send(session_name, message) do
    case whereis_name(session_name) do
      :undefined ->
        {:badarg, {session_name, message}}

      pid ->
        Kernel.send(pid, message)
        pid
    end
  end

  def init(_)
    {:ok, Map.new}
  end

  def handle_call({:whereis_name, session_name}, _from, state) do
    case Map.get(state, session_name) do
      nil ->
        {:reply, :yes, Map.put(state, room_name, pid)}

      _ ->
        {:reply, :no, state}
    end
  end

  def handle_cast({:register_name, session_name, pid}, _from, state) do
    case Map.get(state, session_name) do
      nil ->
        {:reply, :yes, Map.put(state, session_name, pid)}

      _ ->
        {:reply, :no, state}
    end
  end

  def handle_cast({:unregister_name, session_name}, state) do
    {:noreply, Map.delete(state, session_name)}
  end
end
