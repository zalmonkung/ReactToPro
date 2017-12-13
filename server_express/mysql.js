
import mysql from 'mysql'

class App extends Component {
  state = { data: null, isLoading: false }
  componentDidMount() {
    getdata();
  }
  render() {
      const { data, isLoading } = this.state
      return (
          <div>
              <h1>Users</h1>
              {isLoading && <div>Loading...</div>}
              <h1> {data} </h1>
          </div>
      )
  }
}

function getdata(){
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root@localhost',
    database: 'react_db'
  });
  connection.connect();

  connection.query('SELECT 1+1 AS solution', function(error,result,fields){
    if(error) throw error;
    console.log('The solution is: ', result[0].solution);
  });
  connection.end();
}

export default App
