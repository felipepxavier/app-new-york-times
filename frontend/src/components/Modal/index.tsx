import React, { useCallback, useContext } from 'react';
import { MdClose } from 'react-icons/md';
import { parseISO, format } from 'date-fns';
import { Container, Header, Content, By, BtnLink } from './styles';
import StoryContext from '../../pages/Main/context';

interface ModalProps {
  content: any;
}

const Modal: React.FC<ModalProps> = ({ content }) => {
  const { setContentModal } = useContext(StoryContext);

  const handleClose = useCallback(() => {
    setContentModal({ open: false });
  }, []);

  const parsedDate = parseISO(content.published_date);
  const formatedDate = format(parsedDate, 'dd/MM/yyyy');

  return (
    <>
      <Container>
        <div className="modal">
          <Header onClick={handleClose}>
            <span> News details</span>
            <MdClose />
          </Header>

          <Content>
            <h2>{content.title}</h2>

            <By>
              <span>{content.byline}</span>
              <time>{formatedDate}</time>
            </By>

            <p>{content.abstract}</p>

            <BtnLink
              href={`${content.short_url}`}
              target="_blank"
              rel="noreferrer"
            >
              Read more
            </BtnLink>
          </Content>
        </div>
      </Container>
    </>
  );
};

export default Modal;
