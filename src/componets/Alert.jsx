import Alert from 'react-bootstrap/Alert';

function CustomAlert({ message, variant }) {
  return (
    <Alert variant={variant}>
      {message}
    </Alert>
  );
};

export default CustomAlert;