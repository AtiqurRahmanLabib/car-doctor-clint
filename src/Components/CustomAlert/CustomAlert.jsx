// src/components/CustomAlert.jsx
import Swal from 'sweetalert2';

export const confirmDelete = () => {
  return Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#FF3811',
    cancelButtonColor: '#444444',
    confirmButtonText: 'Yes, delete it!',
    customClass: {
      popup: 'bg-white dark:bg-gray-800 rounded-lg shadow-xl',
      title: 'text-gray-900 dark:text-white font-inter font-bold text-xl',
      htmlContainer: 'text-gray-700 dark:text-gray-300 font-inter',
      confirmButton: 'font-inter font-semibold px-4 py-2 rounded-lg',
      cancelButton: 'font-inter font-semibold px-4 py-2 rounded-lg mr-2'
    },
    buttonsStyling: false
  });
};

export const successAlert = (message) => {
  return Swal.fire({
    title: 'Success!',
    text: message,
    icon: 'success',
    confirmButtonColor: '#FF3811',
    customClass: {
      popup: 'bg-white dark:bg-gray-800 rounded-lg shadow-xl',
      title: 'text-gray-900 dark:text-white font-inter font-bold text-xl',
      htmlContainer: 'text-gray-700 dark:text-gray-300 font-inter',
      confirmButton: 'font-inter font-semibold px-4 py-2 rounded-lg'
    },
    buttonsStyling: false
  });
};