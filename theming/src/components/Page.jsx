import { useTheme } from '@material-ui/core';

const Page = ({ myTheme }) => {
  // const theme = useTheme();
  return (
    <div style={{ backgroundColor: myTheme.palette.background.default }}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt velit
        eligendi cupiditate animi praesentium impedit illo eum placeat fugiat
        enim provident dignissimos ea alias quo error, unde omnis magnam. Sit.
      </p>
    </div>
  );
};

export default Page;
