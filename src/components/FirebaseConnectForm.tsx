"use client";

import { connect } from "@/app/action";

export const FirebaseConnectForm = () => {
  return (
    <form action={connect} className="FirebaseConnectForm">
      <header>
        <h2>Connect Firebase RealTime Database</h2>
        <p>Type your secrets:</p>
      </header>
      <main>
        <div>
          <label htmlFor="">apiKey:</label>
          <input name="apiKey" type="text" />
        </div>
        <div>
          <label htmlFor="">authDomain:</label>
          <input name="authDomain" type="text" />
        </div>
        <div>
          <label htmlFor="">databaseURL:</label>
          <input name="databaseURL" type="text" />
        </div>
        <div>
          <label htmlFor="">projectId:</label>
          <input name="projectId" type="text" />
        </div>
        <div>
          <label htmlFor="">storageBucket:</label>
          <input name="storageBucket" type="text" />
        </div>
        <div>
          <label htmlFor="">messagingSenderId:</label>
          <input name="messagingSenderId" type="text" />
        </div>
        <div>
          <label htmlFor="">appId:</label>
          <input name="appId" type="text" />
        </div>
      </main>
      <footer>
        <button type="submit">Connect</button>
      </footer>
    </form>
  );
};
