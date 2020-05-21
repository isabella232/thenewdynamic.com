var PostPreview = createClass({
  render: function() {
    var entry = this.props.entry;
    return h('div', {"className": "px-4"},
      h('h1', {"className": "text-5xl font-normal pt-10 mb-16"}, entry.getIn(['data', 'title'])),
      h('div', {"className": "my-4 user-content"}, this.props.widgetFor('body'))
    );
  }
});
CMS.registerPreviewTemplate("articles", PostPreview);