import React from "react";
import "./Deletion.css";
export const Deletion: React.FC = () => {
  return (
    <div className="deletion">
      <div className="hirethesbest">
        <input type="checkbox" name="check-hire" />
        <label htmlFor="check-hire">
          Show my profile to serious employers on&nbsp;
          <a href="javascript:void(0)" className="hirethesbest-link">
            hirethesbest.io
          </a>
          &nbsp;for free
        </label>
      </div>
      <div className="delete-confirm">
        <div>
          <h5>Delete account</h5>
          <p>
            If you delete your account you’ll be permanently removing it from
            our systems - you can’t undo it.
          </p>
        </div>
        <p className="confirm-deletion">Yes, Delete my account</p>
      </div>
    </div>
  );
};
