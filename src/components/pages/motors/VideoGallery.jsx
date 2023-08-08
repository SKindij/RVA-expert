import PropTypes from 'prop-types';
import { Box, Typography, Grid } from '@mui/material';
import SectionTitleTwo from '../../common/SectionTitleTwo';

const VideoGallery = ({ videoUrls }) => {
  return (
    <Box p={2} >
   <SectionTitleTwo title="Цікаві та пізнавальні " 
       colored="відеоролики по автоматиці та шлагбаумах" sx={{textAlign: 'left'}} 
   />
      <Grid container spacing={3}>
        {videoUrls.map((video) => (
          <Grid key={video.id} item xs={12} sm={6} md={4} lg={4} xl={4}>
            <iframe
              width="100%" height="315"
              src={video.url} title={`YouTube video ${video.title}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen loading="lazy"
            ></iframe>
			<Typography variant="subtitle2" align="center">
              {video.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
VideoGallery.propTypes = {
  videoUrls: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default VideoGallery;