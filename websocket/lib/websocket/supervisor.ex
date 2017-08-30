defmodule MatchPoints.Supervisor do
  use Supervisor
  alias MatchPoints.Server

  def start_link do
    Supervisor.start_link(__MODULE__, [], name: :mp_supervisor)
  end

  def start_room(name) do
    Supervisor.start_child(:mp_supervisor, [name])
  end

  def initialize_if_havent(name, token) do
    case start_room(name) do
      {:ok, _pid} ->
        players = MatchPoints.Utils.get_players(token)
        Server.set_players(name, players)
        {:ok, players}
      {:error, _reason} ->
        players = Server.get_players(name, players)
        {:ok, players}
      _ ->
        {:error, []}
    end
  end

  def init(_) do
    children = [
      worker(MatchPoints.Server, [])
    ]

    supervise(children, strategy: :simple_one_for_one)
  end
end
