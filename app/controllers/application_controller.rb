# frozen_string_literal: true

# Root
class ApplicationController < ActionController::Base
  def index; end

  def show
    event = Event.find(params[:id])
    render inertia: 'Event/Show',
           props: {
             event: event.as_json(
               only: %i[id title start_date description]
             )
           }
  end
end
