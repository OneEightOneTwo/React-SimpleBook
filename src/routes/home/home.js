import React from 'react';
import { connect } from 'dva';
import Header from '../../components/Header/Header.jsx'

function header() {
  return (
    <div>
      <Header/>
    </div>
  );
}

header.propTypes = {
};

export default connect()(header);
