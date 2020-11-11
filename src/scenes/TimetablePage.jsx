import {
  Fragment
} from "react";

function TimetablePage() {
  return (
    <Fragment>
      <div className="row">
        <div className="col">
          <h1>Stundenplan</h1>
        </div>
      </div>
      <div className="row">
        <select>
          <option>Studiengang ...</option>
        </select>
      </div>
      <div className="row">
        <div className="col">
          <table className="w-100">
            <thead>
              <tr>
                <th style={{ "width": "10%" }} className="p-2" scope="col">Zeit</th>
                <th style={{ "width": "18%" }} className="p-2" scope="col">Montag</th>
                <th style={{ "width": "18%" }} className="p-2" scope="col">Dienstag</th>
                <th style={{ "width": "18%" }} className="p-2" scope="col">Mittwoch</th>
                <th style={{ "width": "18%" }} className="p-2" scope="col">Donnerstag</th>
                <th style={{ "width": "18%" }} className="p-2" scope="col">Freitag</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"  className="p-2">1. DS</th>
                <td className="p-2">...</td>
                <td className="p-2">...</td>
                <td className="p-2">...</td>
                <td className="p-2">...</td>
                <td className="p-2">...</td>
              </tr>
              <tr>
                <th scope="row" className="p-2">2. DS</th>
                <td className="p-2">...</td>
                <td className="p-2">...</td>
                <td className="p-2">...</td>
                <td className="p-2">...</td>
                <td className="p-2">...</td>
              </tr>
              <tr>
                <th scope="row" className="p-2">3. DS</th>
                <td className="p-2">...</td>
                <td className="p-2">...</td>
                <td className="p-2">...</td>
                <td className="p-2">...</td>
                <td className="p-2">...</td>
              </tr>
              <tr>
                <th scope="row" className="p-2">4. DS</th>
                <td className="p-2">...</td>
                <td className="p-2">...</td>
                <td className="p-2">...</td>
                <td className="p-2">...</td>
                <td className="p-2">...</td>
              </tr>
              <tr>
                <th scope="row" className="p-2">5. DS</th>
                <td className="p-2">...</td>
                <td className="p-2">...</td>
                <td className="p-2">...</td>
                <td className="p-2">...</td>
                <td className="p-2">...</td>
              </tr>
              <tr>
                <th scope="row" className="p-2">6. DS</th>
                <td className="p-2">...</td>
                <td className="p-2">...</td>
                <td className="p-2">...</td>
                <td className="p-2">...</td>
                <td className="p-2">...</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
}

export default TimetablePage;
