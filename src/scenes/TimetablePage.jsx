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
      <table>
        <thead>
          <tr className="row">
            <th className="col" scope="col">Zeit</th>
            <th className="col" scope="col">Montag</th>
            <th className="col" scope="col">Dienstag</th>
            <th className="col" scope="col">Mittwoch</th>
            <th className="col" scope="col">Donnerstag</th>
            <th className="col" scope="col">Freitag</th>
          </tr>
        </thead>
        <tbody>
          <tr className="row">
            <th className="col" scope="row">1. DS</th>
            <td className="col">...</td>
            <td className="col">...</td>
            <td className="col">...</td>
            <td className="col">...</td>
            <td className="col">...</td>
          </tr>
          <tr className="row">
            <th className="col" scope="row">2. DS</th>
            <td className="col">...</td>
            <td className="col">...</td>
            <td className="col">...</td>
            <td className="col">...</td>
            <td className="col">...</td>
          </tr>
          <tr className="row">
            <th className="col" scope="row">3. DS</th>
            <td className="col">...</td>
            <td className="col">...</td>
            <td className="col">...</td>
            <td className="col">...</td>
            <td className="col">...</td>
          </tr>
          <tr className="row">
            <th className="col" scope="row">4. DS</th>
            <td className="col">...</td>
            <td className="col">...</td>
            <td className="col">...</td>
            <td className="col">...</td>
            <td className="col">...</td>
          </tr>
          <tr className="row">
            <th className="col" scope="row">5. DS</th>
            <td className="col">...</td>
            <td className="col">...</td>
            <td className="col">...</td>
            <td className="col">...</td>
            <td className="col">...</td>
          </tr>
          <tr className="row">
            <th className="col" scope="row">6. DS</th>
            <td className="col">...</td>
            <td className="col">...</td>
            <td className="col">...</td>
            <td className="col">...</td>
            <td className="col">...</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
}

export default TimetablePage;
