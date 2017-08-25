defmodule MatchPoints.PageController do
  use MatchPoints.Web, :controller

  def index(conn, _params) do
    a = Mongo.find(:mongo, "club", %{}, limit: 2, pool: DBConnection.Poolboy)
    IO.inspect a
    render conn, "hello"
  end
end
