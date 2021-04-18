const withEmptyUserData = (Component) => {
  return (props) => {
    if (!props.data.id) return <div>Empty data</div>;
    return <Component {...props} />;
  };
};

export default withEmptyUserData;
