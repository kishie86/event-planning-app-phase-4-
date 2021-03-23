class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :name
      t.string :image
      t.string :content

      t.timestamps
    end
  end
end
