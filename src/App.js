import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="page">
      <div className="card">
        <div className="card-header">
          <div className="hr-badge">HR</div>
          <div className="hr-copy">
            <div className="hr-title">Human Resources</div>
            <div className="hr-sub">Recognition Office</div>
          </div>
          <div className="form-meta">
            Form 27B • Commendation Notice
            <br />
            File ID CN-481A
          </div>
        </div>

        <div className="card-body">
          <div className="seal">
            <div className="seal-dot" />
          </div>
          <h1 className="headline">Congratulations</h1>
          <p className="lede">
            Your excellence has been seen. This notice confirms your continuing
            alignment with Recognition Protocol 12.
          </p>

          <div className="grid">
            <div className="kv">
              <div className="kv-label">Status</div>
              <div className="kv-value">Commendation — Active</div>
            </div>
            <div className="kv">
              <div className="kv-label">Category</div>
              <div className="kv-value">Exceeds Expectations</div>
            </div>
            <div className="kv">
              <div className="kv-label">Revision</div>
              <div className="kv-value">RP12 • 4.3</div>
            </div>
          </div>

          <button className="print-btn" onClick={() => window.print()}>
            Print Commendation
          </button>
        </div>

        <div className="card-footer">
          <div>Acknowledgment required • do not distribute externally</div>
          <div className="mono">AUDIT TRACE 00:7A:19</div>
        </div>
      </div>

      <div className="footnote">
        By proceeding you confirm you have read Wellness Policy 4 and agree to continued optimism.
      </div>
    </div>
  );
}
