// ==========================================================================
// Project:   xTuple Postbooks - Business Management System Framework        
// Copyright: ©2012 OpenMFG LLC, d/b/a xTuple                             
// ==========================================================================

/*globals XM */

/**
  @scope XM.IncidentComment
  @mixin

  This code is automatically generated and will be over-written. Do not edit directly.
*/
XM._IncidentComment = {
  /** @scope XM.IncidentComment.prototype */
  
  className: 'XM.IncidentComment',

  

  // .................................................
  // PRIVILEGES
  //

  privileges: {
    "all": {
      "create": true,
      "read": true,
      "update": "EditOthersComments",
      "delete": false
    },
    "personal": {
      "update": "EditOwnComments",
      "properties": [
        "createdBy"
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
    @type XM.Incident
  */
  incident: SC.Record.toOne('XM.Incident', {
    label: '_incident'.loc()
  }),

  /**
    @type XM.CommentType
  */
  commentType: SC.Record.toOne('XM.CommentType', {
    label: '_commentType'.loc()
  }),

  /**
    @type String
  */
  text: SC.Record.attr(String, {
    label: '_text'.loc()
  }),

  /**
    @type Boolean
  */
  isPublic: SC.Record.attr(Boolean, {
    label: '_isPublic'.loc()
  }),

  /**
    @type Date
  */
  created: SC.Record.attr(SC.DateTime, {
    format: '%Y-%m-%d',
    useIsoDate: false,
    label: '_created'.loc()
  }),

  /**
    @type String
  */
  createdBy: SC.Record.attr(String, {
    label: '_createdBy'.loc()
  })

};
