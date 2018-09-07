import React from 'react';

export const LoadingHOC = WrapperComponent => {
  class LoadingHOC extends React.Component {
    render() {
      return this.props.contacts.length ? (
        <WrapperComponent {...this.props} />
      ) : (
        <div className="loader"/>
      );
    }
  }

  return LoadingHOC;
};



const ShowMyName = () => <div>Oleh</div>;
const ShowMyNameWithLoader = LoadingHOC(ShowMyName);




/*
*
*  Напишите HOC который будет расширять верстку у компонента
*  и добавлять 2 кнопки и СЧЕТЧИК!
*
* */
