import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { defaultTheme } from '@vuepress/theme-default'
import viteBundler from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  title: 'CNDA',
  description:
    'The Research Computing and Informatics Facility (RCIF) ' +
    'supports human imaging researchers across all campuses of ' +
    'Washington University in St. Louis.',
  head: [['link', { rel: 'icon', href: '/images/favicon.png' }]],
  theme: defaultTheme({
    logo: '/images/logo.png',
    repo: 'rcifw/cnda-help',
    repoLabel: 'Contribute!',
    navbar: [],
    sidebar: [
      {
        text: 'About the CNDA',
        collapsible: true,
        children: [
          '/About_the_CNDA/CNDA_Services_and_Rates',
          '/About_the_CNDA/People_of_the_CNDA',
          '/About_the_CNDA/Contacting_the_CNDA_Help_Desk',
          '/About_the_CNDA/XNAT_Central',
        ],
      },
      {
        text: 'CNDA User Guide and Tutorials',
        collapsible: true,
        children: [
          {
            text: 'Getting Started',
            children: [
              '/CNDA_User_Guide_and_Tutorials/Getting_Started/Log_In_to_the_CNDA',
              '/CNDA_User_Guide_and_Tutorials/Getting_Started/Viewing_Images_in_CNDA',
              '/CNDA_User_Guide_and_Tutorials/Access/Auto_Logout_Feature',
              '/CNDA_User_Guide_and_Tutorials/Access/Requesting_Access_To_a_Project',
              '/Additional_Tools_for_CNDA',
              '/Troubleshooting_Issues_in_CNDA/Reporting_an_Issue_With_the_CNDA',
            ],
          },
          {
            text: 'Access',
            children: [
              '/CNDA_User_Guide_and_Tutorials/Access/Register_For_a_CNDA_User_ID',
              '/CNDA_User_Guide_and_Tutorials/Access/Roles_and_Permissions',
              '/CNDA_User_Guide_and_Tutorials/Access/Requesting_Access_To_a_Project',
              '/CNDA_User_Guide_and_Tutorials/Access/Add_Users_To_a_Project',
              '/CNDA_User_Guide_and_Tutorials/Access/Changing_Passwords',
              '/CNDA_User_Guide_and_Tutorials/Access/Auto_Logout_Feature',
            ],
          },
          {
            text: 'Projects',
            children: [
              '/CNDA_User_Guide_and_Tutorials/Projects/How_Project_Data_is_Organized_in_the_CNDA',
              '/CNDA_User_Guide_and_Tutorials/Projects/No_PHI_in_the_CNDA',
              '/CNDA_User_Guide_and_Tutorials/Searching_CNDA/Finding_Data_in_the_CNDA',
              '/CNDA_User_Guide_and_Tutorials/Projects/How_to_Create_a_Project',
              '/CNDA_User_Guide_and_Tutorials/Projects/Adding_an_Alias_to_a_Project',
              '/CNDA_User_Guide_and_Tutorials/Projects/Adding_Custom_Variables_to_a_Project',
              '/CNDA_User_Guide_and_Tutorials/Projects/Managing_Project_Configurations',
              '/CNDA_User_Guide_and_Tutorials/Projects/Setting_up_Project_Favorites',
              '/CNDA_User_Guide_and_Tutorials/Projects/New_Project_Checklist',
            ],
          },
          {
            text: 'Subjects',
            children: [
              '/CNDA_User_Guide_and_Tutorials/Subjects/Creating_a_New_Subject',
              '/CNDA_User_Guide_and_Tutorials/Subjects/Edit_a_Subject',
              '/CNDA_User_Guide_and_Tutorials/Subjects/Sharing_a_Subject_Between_Projects',
            ],
          },
          {
            text: 'Experiments',
            children: [
              '/CNDA_User_Guide_and_Tutorials/Getting_Started/Viewing_Images_in_CNDA',
              '/CNDA_User_Guide_and_Tutorials/Experiments/Adding_a_New_Experiment',
              '/CNDA_User_Guide_and_Tutorials/Experiments/Session_Editing',
              '/CNDA_User_Guide_and_Tutorials/Experiments/Sharing_a_Session_Between_Projects',
              '/CNDA_User_Guide_and_Tutorials/Experiments/Merging_Sessions',
              '/CNDA_User_Guide_and_Tutorials/Experiments/Deleting_an_Imaging_Session',
              '/CNDA_User_Guide_and_Tutorials/Experiments/Viewing_DICOM_Headers',
              '/CNDA_User_Guide_and_Tutorials/Experiments/How_the_CNDA_Anonymizes_Sessions',
            ],
          },
          {
            text: 'Searching CNDA',
            children: [
              '/CNDA_User_Guide_and_Tutorials/Searching_CNDA/Finding_Data_in_the_CNDA',
              '/CNDA_User_Guide_and_Tutorials/Searching_CNDA/Generating_a_Quick_Search',
              '/CNDA_User_Guide_and_Tutorials/Searching_CNDA/Generating_an_Advanced_Search',
              '/CNDA_User_Guide_and_Tutorials/Searching_CNDA/Working_With_Stored_Searches',
              '/CNDA_User_Guide_and_Tutorials/Searching_CNDA/Manipulating_Search_Results_and_Data_Tables',
              '/CNDA_User_Guide_and_Tutorials/Searching_CNDA/Unable_to_Find_Upload_in_Prearchive',
            ],
          },
          {
            text: 'Prearchive and Archive',
            children: [
              '/CNDA_User_Guide_and_Tutorials/Prearchive_and_Archive/Accessing_and_Using_the_Prearchive',
              '/CNDA_User_Guide_and_Tutorials/Prearchive_and_Archive/Archiving_Data-Archive_and_Prearchive_Settings',
              '/CNDA_User_Guide_and_Tutorials/Searching_CNDA/Unable_to_Find_Upload_in_Prearchive',
            ],
          },
          {
            text: 'Prearchive Cleanup',
            children: [
              '/CNDA_User_Guide_and_Tutorials/Prearchive_Cleanup/Prearchive_Cleanup_Overview',
              '/CNDA_User_Guide_and_Tutorials/Prearchive_Cleanup/Prearchive_Cleanup_Instructions',
            ],
          },
          '/CNDA_User_Guide_and_Tutorials/Data_Sharing/Data_Sharing',
          '/CNDA_User_Guide_and_Tutorials/Data_Sharing/Requesting_Clinical_Imaging_Data_From_BJC',
          {
            text: 'Downloading Data',
            children: [
              '/CNDA_User_Guide_and_Tutorials/Downloading_Data/Downloading_From_Search_Results',
              '/CNDA_User_Guide_and_Tutorials/Downloading_Data/Downloading_Multiple_Images_From_Project_Page',
              '/CNDA_User_Guide_and_Tutorials/Downloading_Data/Downloading_One_Image_From_Session',
              '/CNDA_User_Guide_and_Tutorials/Downloading_Data/Using_Manage_Files_to_Download',
            ],
          },
          {
            text: 'Uploading Data',
            children: [
              '/CNDA_User_Guide_and_Tutorials/Uploading_Data/Upload_a_Document_Using_Manage_Files',
              '/CNDA_User_Guide_and_Tutorials/Uploading_Data/Uploading_Data_via_DICOM_Browser',
              '/CNDA_User_Guide_and_Tutorials/Uploading_Data/Uploading_ECAT_Data_to_the_CNDA',
              '/CNDA_User_Guide_and_Tutorials/Uploading_Data/Uploading_Using_a_Desktop_Application',
            ],
          },
          {
            text: 'Docker Containers on CNDA',
            children: [
              '/CNDA_User_Guide_and_Tutorials/Docker_Containers_on_CNDA/Adding_Docker_Containers_to_a_Project',
              '/CNDA_User_Guide_and_Tutorials/Docker_Containers_on_CNDA/Running_Docker_Containers_on_a_Project',
            ],
          },
          //'/CNDA_User_Guide_and_Tutorials/Pipelines_in_CNDA',
          //'/CNDA_User_Guide_and_Tutorials/Scripting',
          //'/CNDA_User_Guide_and_Tutorials/Additional_Tools_for_CNDA',
        ],
      },
      {
        text: 'Advanced Topics',
        collapsible: true,
        children: [
          '/Troubleshooting_Issues_in_CNDA/Resetting_Internet_Browser',
          '/CNDA_User_Guide_and_Tutorials/Projects/Setting_up_Project_Favorites',
          {
            text: 'Uploading and Prearchive',
            children: [
              '/CNDA_User_Guide_and_Tutorials/Uploading_Data/Uploading_Data',
              '/CNDA_User_Guide_and_Tutorials/Uploading_Data/Uploading_Data_Using_the_Zip_Uploader',
              '/Imaging_Center_User_Guides/Uploading_Sessions_from_Bay3',
              '/CNDA_User_Guide_and_Tutorials/Uploading_Data/Uploading_ECAT_Data_to_the_CNDA',
              '/CNDA_User_Guide_and_Tutorials/Uploading_Data/Upload_a_Document_Using_Manage_Files',
              '/CNDA_User_Guide_and_Tutorials/Uploading_Data/Uploading_a_Spreadsheet_to_CNDA',
              '/CNDA_User_Guide_and_Tutorials/Uploading_Data/Uploading_Data_via_DICOM_Browser',
              '/CNDA_User_Guide_and_Tutorials/Prearchive_and_Archive/Accessing_and_Using_the_Prearchive',
              '/CNDA_User_Guide_and_Tutorials/Searching_CNDA/Unable_to_Find_Upload_in_Prearchive',
            ],
          },
          {
            text: 'Editing Data Within CNDA',
            children: [
              '/CNDA_User_Guide_and_Tutorials/Experiments/Session_Editing',
              '/CNDA_User_Guide_and_Tutorials/Experiments/Merging_Sessions',
              '/CNDA_User_Guide_and_Tutorials/Projects/Scan_Type_Cleanup',
              '/CNDA_User_Guide_and_Tutorials/Experiments/Deleting_an_Imaging_Session',
            ],
          },
          {
            text: 'DICOM',
            children: [
              '/CNDA_User_Guide_and_Tutorials/Experiments/Viewing_DICOM_Headers',
              '/CNDA_User_Guide_and_Tutorials/Experiments/Running_DICOM_Browser_From_CNDA',
            ],
          },
          '/CNDA_User_Guide_and_Tutorials/Data_Sharing/Data_Sharing',
          {
            text: 'Stored Searches',
            children: [
              '/CNDA_User_Guide_and_Tutorials/Searching_CNDA/Working_With_Stored_Searches',
              '/CNDA_User_Guide_and_Tutorials/Searching_CNDA/Generating_a_Quick_Search',
              '/CNDA_User_Guide_and_Tutorials/Searching_CNDA/Generating_an_Advanced_Search',
              '/CNDA_User_Guide_and_Tutorials/Searching_CNDA/Manipulating_Search_Results_and_Data_Tables',
            ],
          },
          {
            text: 'Downloading',
            children: [
              '/CNDA_User_Guide_and_Tutorials/Downloading_Data/Downloading_From_Search_Results',
              '/CNDA_User_Guide_and_Tutorials/Downloading_Data/Using_Manage_Files_to_Download',
              '/CNDA_User_Guide_and_Tutorials/Downloading_Data/Downloading_One_Image_From_Session',
              '/CNDA_User_Guide_and_Tutorials/Downloading_Data/Downloading_Multiple_Images_From_Project_Page',
              '/CNDA_User_Guide_and_Tutorials/Downloading_Data/Bulk_Downloads_from_CNDA_to_Windows_PC',
            ],
          },
          {
            text: 'Misc',
            children: [
              '/Advanced_Topics/CTP_-_Generic_Interface',
              '/Advanced_Topics/Secure_File_Zipping',
              '/Advanced_Topics/REST_API_FAQs',
              '/Advanced_Topics/Useful_Scripts',
            ],
          },
        ],
      },
      {
        text: 'Troubleshooting Issues in CNDA',
        collapsible: true,
        children: [
          '/Troubleshooting_Issues_in_CNDA/Clearing_Browser_Cache',
          '/Troubleshooting_Issues_in_CNDA/Clearing_CNDA_Cache',
          '/Troubleshooting_Issues_in_CNDA/Reporting_an_Issue_With_the_CNDA',
          '/Troubleshooting_Issues_in_CNDA/Resetting_Internet_Browser',
        ],
      },
      {
        text: 'Imaging Center User Guides',
        collapsible: true,
        children: [
          '/Imaging_Center_User_Guides/At_the_Scanner',
          '/Imaging_Center_User_Guides/Downloading_Raw_Data',
          '/Imaging_Center_User_Guides/Getting_Started_in_CNDA',
          {
            text: 'East Imaging Building: Instrument Specific',
            children: [
              '/Imaging_Center_User_Guides/Uploading_Sessions_from_Bay3',
            ],
          },
        ],
      },
    ],
    themePlugins: {
      git: false,
    },
  }),
  pagePatterns: ['**/*.md', '!README.md', '!.vuepress', '!node_modules'],
  bundler: viteBundler(),
  plugins: [
    searchPlugin({
      hotKeys: [
        '/',
        {
          key: 'k',
          ctrl: true,
        },
      ],
      maxSuggestions: 10,
      // To add more fields to the index, (Other than title + headers) you should extend the `SearchIndex` type:
      // https://v2.vuepress.vuejs.org/reference/plugin/search.html#getextrafields
    }),
  ],
})
