import Loader from 'components/Loader/Loader';
import useLoading from 'hooks/useLoading';

const withLoading = (url) => (Component) => {
  return (props) => {
    const [{ loading, data }] = useLoading(url);

    if (loading) return <Loader />;

    return <Component data={data} {...props} />;
  };
};

export default withLoading;
