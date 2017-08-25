defmodule MatchPoints.Server do
  use GenServer

  def start_link(name) do
    GenServer.start_link(__MODULE__, [], name: via_tuple(name))
  end

  defp via_tuple(name) do
    {:via, MatchPoints.SessionRegistry, {:session, name}}
  end

  def init(messages) do
    {:ok, messages}
  end
end
