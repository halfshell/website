class NpmSearchFilter < Nanoc::Filter
  identifier :npm
  type :text

  def run(content, params={})
    # TODO - This should connect to the npm registry's CouchDB interface
    # and query for documents where the keywords array includes 'halfshell'.
    # Then the static (mockup) content/data/packages.json should be deleted.

    content
  end

end
