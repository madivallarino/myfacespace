class CreateConnections < ActiveRecord::Migration[6.1]
  def change
    create_table :connections do |t|
      t.belongs_to :follower, class_name: "User"
      t.belongs_to :followed, class_name: "User"
      t.timestamps
    end
  end
end
