

function Alert({ type, message }) {
    const alertStyles = {
        success: "alert alert-success",
        warning: "alert alert-warning",
        error: "alert alert-danger"
    };
  return (
    <div className={alertStyles[type]}>
        {message}
    </div>
  );
}

export default Alert;
