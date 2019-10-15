import eel
import sqlite3
import sklearn
import numpy as np
import sqlite3 
import sklearn
import numpy as np
connection=sqlite3.connect('Child.db')
c=connection.cursor()
from os.path import isfile
eel.init('web', allowed_extensions=['.js', '.html','.htm'])
def created_child_database():
    try:
        c.execute("""CREATE TABLE child(
                mcts_id_child numerics,
                child_name text,
                sex text,
                mothers_name text,
                mcts_mother numerics,
                date_of_birth text,
                place_of_birth text,
                religion text
                 )""")
        connection.commit()
    except sqlite3.OperationalError:
        print("Tab")

def insert_child_data(data):
    required_values=tuple(v if str(v).isdigit()  else str(v) for k,v in data.items())
    c.execute("""INSERT INTO child  VALUES (?,?,?,?,?,?,?,?)""",required_values)
    connection.commit()

#@eel.expose
def update_child(data,mcts):
    keys_to_be_changed=tuple(keys for keys in data)
    mapper=tuple('?' for keys in data)
    values_to_be_changed=tuple(v if str(v).isdigit() else str(v) for k,v in data.items())
    c.execute("update child set mapper where mcts_id_child=mcts",values_to_be_changed)
    c.commit()


@eel.expose
def validate_login(data):
    required_data=(data ,)
    c.execute('select * from child where mcts_id_child=?', required_data)
    return_value=c.fetchall()
    return return_value if return_value else 'NULL'



@eel.expose
def validate_nurse(data):
    pass
    

@eel.expose
def validate_child(data):
    insert_child_data(data)

def show_db():
    c.execute("""Select * from child""")
    print(c.fetchall())

@eel.expose
def sex_ratio():
    male=('m',)
    female=('f',)
    c.execute("select * from child where  sex=?",male)
    male_children=c.fetchall()
    c.execute("select * from child where sex=?",female)
    female_children=c.fetchall()
    return len(male_children),len(female_children)
if __name__=='__main__':
    #show_db()
    created_child_database()
    #sex_ratio()
    eel.start("finalmini.html", port=8000)
