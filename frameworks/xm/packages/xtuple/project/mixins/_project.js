// ==========================================================================
// Project:   xTuple Postbooks - Business Management System Framework        
// Copyright: ©2012 OpenMFG LLC, d/b/a xTuple                             
// ==========================================================================

/*globals XM */

/**
  @scope XM.Project
  @mixin

  This code is automatically generated and will be over-written. Do not edit directly.
*/
XM._Project = {
  /** @scope XM.Project.prototype */
  
  className: 'XM.Project',

  nestedRecordNamespace: XM,

  // .................................................
  // PRIVILEGES
  //

  privileges: {
    "all": {
      "create": "MaintainAllProjects",
      "read": "ViewAllProjects",
      "update": "MaintainAllProjects",
      "delete": "MaintainAllProjects"
    },
    "personal": {
      "create": "MaintainPersonalProjects",
      "read": "ViewPersonalProjects",
      "update": "MaintainPersonalProjects",
      "delete": "MaintainPersonalProjects",
      "properties": [
        "owner",
        "assignedTo"
      ]
    }
  },

  //..................................................
  // ATTRIBUTES
  //
  
  /**
    @type Number
  */
  guid: SC.Record.attr(Number),

  /**
    @type String
  */
  number: SC.Record.attr(String, {
    isRequired: true,
    label: '_number'.loc()
  }),

  /**
    @type String
  */
  name: SC.Record.attr(String, {
    label: '_name'.loc()
  }),

  /**
    @type String
  */
  notes: SC.Record.attr(String, {
    label: '_notes'.loc()
  }),

  /**
    @type Date
  */
  startDate: SC.Record.attr(SC.DateTime, {
    format: '%Y-%m-%d',
    useIsoDate: false,
    label: '_startDate'.loc()
  }),

  /**
    @type Date
  */
  dueDate: SC.Record.attr(SC.DateTime, {
    format: '%Y-%m-%d',
    useIsoDate: false,
    isRequired: true,
    label: '_dueDate'.loc()
  }),

  /**
    @type Date
  */
  assignDate: SC.Record.attr(SC.DateTime, {
    format: '%Y-%m-%d',
    useIsoDate: false,
    label: '_assignDate'.loc()
  }),

  /**
    @type Date
  */
  completeDate: SC.Record.attr(SC.DateTime, {
    format: '%Y-%m-%d',
    useIsoDate: false,
    label: '_completeDate'.loc()
  }),

  /**
    @type XM.UserAccountInfo
  */
  assignedTo: SC.Record.toOne('XM.UserAccountInfo', {
    isNested: true,
    defaultValue: function() {
      return arguments[0].getPath("store.dataSource").session.userName;
    },
    label: '_assignedTo'.loc()
  }),

  /**
    @type String
  */
  projectStatus: SC.Record.attr(String, {
    label: '_projectStatus'.loc()
  }),

  /**
    @type XM.UserAccountInfo
  */
  owner: SC.Record.toOne('XM.UserAccountInfo', {
    isNested: true,
    defaultValue: function() {
      return arguments[0].getPath("store.dataSource").session.userName;
    },
    label: '_owner'.loc()
  }),

  /**
    @type XM.ProjectRecurrence
  */
  recurrences: SC.Record.toMany('XM.ProjectRecurrence', {
    label: '_recurrences'.loc()
  }),

  /**
    @type XM.ProjectComment
  */
  comments: SC.Record.toMany('XM.ProjectComment', {
    isNested: true,
    inverse: 'project',
    label: '_comments'.loc()
  }),

  /**
    @type XM.ProjectTask
  */
  tasks: SC.Record.toMany('XM.ProjectTask', {
    isNested: true,
    inverse: 'project',
    label: '_tasks'.loc()
  }),

  /**
    @type XM.ProjectContact
  */
  contacts: SC.Record.toMany('XM.ProjectContact', {
    isNested: true,
    inverse: 'source',
    label: '_contacts'.loc()
  }),

  /**
    @type XM.ProjectItem
  */
  items: SC.Record.toMany('XM.ProjectItem', {
    isNested: true,
    inverse: 'source',
    label: '_items'.loc()
  }),

  /**
    @type XM.ProjectFile
  */
  files: SC.Record.toMany('XM.ProjectFile', {
    isNested: true,
    inverse: 'source',
    label: '_files'.loc()
  }),

  /**
    @type XM.ProjectImage
  */
  images: SC.Record.toMany('XM.ProjectImage', {
    isNested: true,
    inverse: 'source',
    label: '_images'.loc()
  }),

  /**
    @type XM.ProjectUrl
  */
  urls: SC.Record.toMany('XM.ProjectUrl', {
    isNested: true,
    inverse: 'source',
    label: '_urls'.loc()
  }),

  /**
    @type XM.ProjectProject
  */
  projects: SC.Record.toMany('XM.ProjectProject', {
    isNested: true,
    inverse: 'source',
    label: '_projects'.loc()
  })

};
