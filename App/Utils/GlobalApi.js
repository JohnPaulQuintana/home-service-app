import { request, gql } from 'graphql-request'
const MASTER_URL='https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clulscc1907fj07tbjfb88lkw/master'

const getSlider=async()=>{
    const query = gql`
    query Sliders {
        sliders {
          createdAt
          id
          name
          publishedAt
          updatedAt
          image {
            url
          }
        }
      }
  `
 const result = await request(MASTER_URL, query);
 return result;
}

const getCategory=async()=>{
    const query = gql`
    query getCategory {
        categories {
            createdAt
            id
            name
            icon {
              url
            }
          }
      }
    `
    const result = await request(MASTER_URL, query);
    return result;
}

const getBusinessList=async()=>{
    const query = gql`
    query getBusinessList {
        businessLists {
          id
          name
          contactPerson
          about
          address
          category {
            name
          }
          images {
            url
          }
        }
      }`
    const result = await request(MASTER_URL, query);
    return result;
}

export default {
    getSlider, getCategory, getBusinessList,
}
