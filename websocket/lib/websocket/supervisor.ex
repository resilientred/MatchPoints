defmodule MatchPoints.Supervisor do
  use Supervisor

  def start_link do
    Supervisor.start_link(__MODULE__, [], name: :mp_supervisor)
  end

  def start_room(name) do
    Supervisor.start_child(:mp_supervisor, [name])
  end

  def init(_) do
    children = [
      worker(MatchPoints.Server, [])
    ]

    supervise(children, strategy: :simple_one_for_one)
  end
end
