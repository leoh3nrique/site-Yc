import { useState, useEffect } from "react";

/**
 * @param {object} initialState - O estado inicial do formulário.
 */
export const useForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const [isSending, setIsSending] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "success",
  });

  useEffect(() => {
    if (notification.show) {
      const timer = setTimeout(() => {
        setNotification((prev) => ({ ...prev, show: false }));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const showNotification = (message, type = "success") => {
    setNotification({ show: true, message, type });
  };

  const resetForm = () => {
    setFormData(initialState);
  };

  return {
    formData,
    setFormData,
    isSending,
    setIsSending,
    notification,
    showNotification,
    handleChange,
    resetForm,
  };
};
