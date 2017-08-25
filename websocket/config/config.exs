# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# Configures the endpoint
config :match_points, MatchPoints.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "rvz+QJxh+qp4hEEvJ2RHcS5gH5PqlVuSK9zROav4TmBAzJKS+YPHZrsBCAcObKGM",
  render_errors: [view: MatchPoints.ErrorView, accepts: ~w(json)],
  pubsub: [name: MatchPoints.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
