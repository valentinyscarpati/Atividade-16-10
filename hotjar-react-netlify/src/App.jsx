import React, { useState } from 'react';
import Header from './Header';
import ImageGrid from './ImageGrid';
import Pagination from './Pagination';
import Modal from './Modal';
import './styles.css';

const imagesData = [
  { id: 1, src: 'lua-de-sangue1.jpg', title: 'Lua de Sangue 1', category: 'lua-de-sangue', details: 'Detalhes sobre Lua de Sangue 1' },
  { id: 2, src: 'lua-de-sangue2.jpg', title: 'Lua de Sangue 2', category: 'lua-de-sangue', details: 'Detalhes sobre Lua de Sangue 2' },
  { id: 3, src: 'lua-de-sangue3.jpg', title: 'Lua de Sangue 3', category: 'lua-de-sangue', details: 'Detalhes sobre Lua de Sangue 3' },
  { id: 4, src: 'coroas1.jpg', title: 'Coroas 1', category: 'coroas', details: 'Detalhes sobre Coroas 1' },
  { id: 5, src: 'coroas2.jpg', title: 'Coroas 2', category: 'coroas', details: 'Detalhes sobre Coroas 2' },
  { id: 6, src: 'coroas3.jpg', title: 'Coroas 3', category: 'coroas', details: 'Detalhes sobre Coroas 3' },
  { id: 7, src: 'espadas1.jpg', title: 'Espadas 1', category: 'espadas', details: 'Detalhes sobre Espadas 1' },
  { id: 8, src: 'espadas2.jpg', title: 'Espadas 2', category: 'espadas', details: 'Detalhes sobre Espadas 2' },
  { id: 9, src: 'espadas3.jpg', title: 'Espadas 3', category: 'espadas', details: 'Detalhes sobre Espadas 3' },
  // Mais imagens podem ser adicionadas aqui...
];

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('todas');
  const [selectedImage, setSelectedImage] = useState(null);

  const imagesPerPage = 9;
  const totalPages = Math.ceil(imagesData.length / imagesPerPage);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const filteredImages = selectedCategory === 'todas'
    ? imagesData
    : imagesData.filter(image => image.category === selectedCategory);

  const paginatedImages = filteredImages.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  );

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="app">
      <Header onCategoryChange={handleCategoryChange} />
      <ImageGrid images={paginatedImages} onImageClick={openModal} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      {selectedImage && (
        <Modal image={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
