import React, { useContext, useCallback } from 'react';
import { Container, Content, Tag, Thumbnail, Line } from './styles';
import StoryContext from '../../../pages/Main/context';

const Story: React.FC<any> = ({ story, style = {} }) => {
  const { setContentModal } = useContext(StoryContext);

  const handleClick = useCallback(() => {
    setContentModal({ open: true, ...story });
  }, []);

  return (
    <article style={style}>
      <Container onClick={handleClick}>
        <Line>
          <Thumbnail src={`${story.multimedia}`} alt="thumbnail" />

          <Content>
            <strong>{story.title}</strong>
            <p>{story.byline}</p>
          </Content>
        </Line>
        <Tag section={story.section}>
          <span>{story.section}</span>
        </Tag>
      </Container>
    </article>
  );
};

export default Story;
