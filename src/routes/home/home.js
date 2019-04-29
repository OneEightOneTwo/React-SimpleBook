import React from 'react';
import { connect } from 'dva';
import HomePage from '../../views/honePage/homePage'

function homePage() {
  return (
    <div>
     <HomePage/>
    </div>
  );
}

homePage.propTypes = {
};

export default connect()(homePage);
