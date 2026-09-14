import './ServicesList.css';
import ServicesCard from '../ServicesCard/ServicesCard';
import ServicesSidebar from '../../Shared/ServicesSidebar/ServicesSidebar';

function ServicesList() {
  return (
    <div className='serviceslist_wrapper'>
      <div className='container serviceslist_layout'>
        <ServicesCard />
        <div className='serviceslist_sidebar_sticky'>
          <ServicesSidebar />
        </div>
      </div>
    </div>
  );
}

export default ServicesList;
