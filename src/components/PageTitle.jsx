import { Helmet } from "react-helmet";

const PageTitle = (props) => {
    return (
        <Helmet>
            <title>DAGMC / {props.title}</title>
        </Helmet>
    );
};

export default PageTitle;