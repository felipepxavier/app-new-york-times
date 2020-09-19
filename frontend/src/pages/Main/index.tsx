import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import { Title } from './styles';
import Stories from '../../components/Stories';
import Modal from '../../components/Modal';
import StoryContext from './context';

interface Story {
  title: string;
  byline: string;
  abstract: string;
  short_url: string;
  published_date: string;
  multimedia: string
}

interface StoryContent {
  open: boolean;
  title?: string;
  byline?: string;
  abstract?: string;
  short_url?: string;
  published_date?: string;
  multimedia?: string
}

const Main: React.FC = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [contentModal, setContentModal] = useState<StoryContent>({
    open: false,
  });

  useEffect(() => {
    try {
      const loadContent = async () => {
        const response = await api.get('stories');

        setStories(response.data.stories);
      };

      loadContent();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Title>Explore the news from the New York Times</Title>

      <StoryContext.Provider value={{ setContentModal }}>
        <Stories dataList={stories} />
        {contentModal.open && <Modal content={contentModal} />}
      </StoryContext.Provider>
    </>
  );
};

export default Main;
