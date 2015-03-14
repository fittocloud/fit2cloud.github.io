require 'slim'

set :site_title, "FIT2CLOUD 在线文档"
set :site_url, "http://docs.fit2cloud.com"

DOCS_VERSIONS = ['1.0', '1.1']
set :latest_docs_version, 'v1.0'

helpers do
  def heading_link(h, id, text)
    "<#{h} id=\"#{id}\"><a href=\"##{id}\">#{text}</a></#{h}>"
  end

  def doc_version_links
    DOCS_VERSIONS.map do |v|
      link_to "v#{v}", "/docs/v#{v}/overview/what-is-fit2cloud.html"
    end.join("<br />")
  end
end

page "/feed.xml", :layout => false

DOCS_VERSIONS.each do |version|
  set :docs_version, "v#{version}"
  with_layout "docs.v#{version}.index" do
   page "/docs/v#{version}/*"
  end
end

page "/docs", :layout => "docs.#{latest_docs_version}.index"

page "/blog/*", :layout => :article
page "/blog/index.html", :layout => :layout


activate :blog do |blog|
  blog.prefix = "blog"
end

activate :alias
activate :livereload
activate :syntax

set :markdown_engine, :redcarpet
set :markdown, :fenced_code_blocks => true, :smartypants => true, :with_toc_data => true

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

configure :build do
  activate :minify_css
  activate :minify_javascript
end
