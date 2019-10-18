import eel
import sqlite3
from os.path import isfile
connection=sqlite3.connect('Child.db')
c=connection.cursor()
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
    with connection:
        required_values=tuple(v if str(v).isdigit()  else str(v) for k,v in data.items())
        c.execute("""INSERT INTO child  VALUES (?,?,?,?,?,?,?,?)""",required_values)

@eel.expose
def update_child(data,mcts):
    with connection:
        required_query= "update child set" + " " + ','.join(x for x in [m+ '=' + '?' for m in data])+' '+'where mcts_id_child= ?'
        values_to_be_changed=tuple([v if str(v).isdigit() else str(v) for k,v in data.items()]+[mcts])
        print(values_to_be_changed)
        c.execute(required_query,values_to_be_changed)



@eel.expose
def validate_login(data):
    required_data=(data ,)
    c.execute('select * from child where mcts_id_child=?', required_data)
    return_value=c.fetchall()
    if return_value:
        data_to_be_returned=[values for values in return_value[0]]
    return 'NULL' if not return_value else data_to_be_returned
    

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
    return [len(male_children),len(female_children)]



if __name__=='__main__':
   
   # created_child_database()
    eel.start("finalmini.html", port=8000)
   # show_db()
   # update_child({'child_name':'chinmoy','religion':'lovism'},1)
  # sex_ratio()