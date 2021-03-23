class CreateUserEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :user_events do |t|
      t.string :location
      t.string :venue
      t.string :date
      t.string :time
      t.integer :event_id
      t.integer :user_id

      t.timestamps
    end
  end
end
