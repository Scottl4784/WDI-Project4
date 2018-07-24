class CreateBeers < ActiveRecord::Migration[5.2]
  def change
    create_table :beers do |t|
      t.string :name
      t.string :tagline
      t.text :description
      t.string :image_url
      t.integer :abv
      t.string :food_pairing
      t.string :first_brewed
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
