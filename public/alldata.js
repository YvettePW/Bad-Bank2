/*
function AllData(){
    const [data, setData] = React.useState('');    

    React.useEffect(() => {
        
        // fetch all accounts from API
        fetch('/account/all')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(JSON.stringify(data));                
            });

    }, []);

    return (<>
        <h5>All Data in Store:</h5>
        {data}
    </>);
}
*/


function AllData(){
  //console.log(name, email, password, deposit, withdraw, balance);
  const [data, setData] = React.useState([]);

  // executes once, upon loading
React.useEffect(() => {
  // fetch all accounts from API
  fetch('/account/all')
    .then(response => response.json())
    .then(apiData => {
      if (Array.isArray(apiData)) {
        console.log(apiData);
        setData(apiData);
      } else {
        console.error('API response is not an array:', apiData);
        // Handle the case where the API response is not an array
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      // Handle the error as needed
    });
}, []);

  return (
    <div className="page-content page-container">
      <div className="padding">
        <div className="row container d-flex justify-content-left">
          <div className="col-lg-10 grid-margin stretch-card">
            <div className="card">
            <img className="table-responsive" src="moneyclip.jpg"/>
              <div className="card-body">

                <h4 className="card-title">ALL DATA</h4> 
                <p className="card-description">All accounts are listed here:</p>
               
                <div className="table-responsive">
                  <table className="table" style={{ width: '100%' }}>

                    <thead>
                    <tr>
                          <th class="block">ID</th>
                          <th class="block">Name</th>
                          <th class="block">Email</th>
                          <th class="block">Password</th>
                          <th class="block">Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                    {data.map(account => ( 
                      
                      <tr key={account._id}>
                          <td class="block">{account._id}</td>
                          <td class="block">{account.name}</td>
                          <td class="block">{account.email}</td>
                          <td class="block">{account.password}</td>
                          <td class="block">${account.balance}</td>
                      </tr>
                  ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>           
        </div>
      </div>
    </div>   
  );
}