class CreateDrinks < ActiveRecord::Migration[5.2]
  def change
    create_table :drinks do |t|
      t.boolean :favorite
      t.references :user, foreign_key: true
      t.integer :beer_id

      t.timestamps
    end
  end
end
