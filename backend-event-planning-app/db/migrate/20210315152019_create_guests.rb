class CreateGuests < ActiveRecord::Migration[6.1]
  def change
    create_table :guests do |t|
      t.string :name
      t.string :telephone
      t.string :email
      t.integer :user_event_id

      t.timestamps
    end
  end
end
