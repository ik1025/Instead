import React from 'react';

function App() {
  return (
    <div className="position-absolute top-50 start-50 translate-middle">

      <h1 className="display-1">Enter Shoe</h1>

      <form>
        <input type="text" className="form-control form-control-lg"/> <br />
        <input type="submit" className="btn btn-primary"/>
      </form>

    </div>
  );
}

export default App;
