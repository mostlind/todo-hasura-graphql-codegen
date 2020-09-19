alter table todo
add
  column state text generated always as (
    case
      when t.completed_at is not null then 'completed'
      when t.started_at is not null then 'in_progress'
      else 'not_started'
    end
  ) stored references todo_state(todo_state);
--
alter table todo
add
  column time_to_complete_in_seconds int generated always as (
    if started_at is not null
    and completed_at is not null then extract(epoch
    FROM completed_at - started_at)
      else null
  end
) stored