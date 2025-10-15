import { useState } from "react";
import styles from "./CustomTab.module.css";
import classNames from "classnames";

export default function CustomTab({ headers, children }) {
  // console.log("styles ", styles);
  let [current, setCurrent] = useState(0);

  const handleTab = (index) => {
    setCurrent(index);
  }

  return (
    <div>
      {/* tab header start ######### */}
      {
        headers.map((header, index) => {
          const tabHeaderClass = classNames('tab-header', {
            'active': index === current
          });

          return (
            <span
              key={index}
              onClick={() => handleTab(index)}
              className={tabHeaderClass}>
              {header}
            </span>
          )
        })
      }
      {/* tab header end ######### */}

      {/* tab body start ######### */}
      <div className={styles['tab-body']}>
        {children[current]}
      </div>
      {/* tab body end ######### */}

    </div>
  );
}
