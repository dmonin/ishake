require 'rake/packagetask'

ZEPTO_VERSION  = "0.8"

ISHAKE_ROOT     = File.expand_path(File.dirname(__FILE__))
ISHAKE_SRC_DIR  = File.join(ISHAKE_ROOT, 'assets/js')
ISHAKE_DIST_DIR = File.join(ISHAKE_ROOT, 'assets/js/ishake-compiled')


ISHAKE_COMPONENTS = [
  'third-party/zepto.min',
  'third-party/director',
  'third-party/amplify.store',
  'third-party/tappable',
  'third-party/iscroll-lite',

  'ishake/application',
  'ishake/lang/de',
  'ishake/lang/en',
  'ishake/model/vector',
  'ishake/repository/list',
  'ishake/repository/user',
  'ishake/ui/form',
  'ishake/ui/menu',
  'ishake/ui/new-item-input',
  'ishake/ui/notify',
  'ishake/ui/page-transition',
  'ishake/view/view',
  'ishake/view/home',
  'ishake/view/homeback',
  'ishake/view/item',
  'ishake/view/list',
  'ishake/view/listedit',
  'ishake/view/lists',
  'ishake/view/login',
  'ishake/view/online',
  'ishake/view/register',
]

task :default => [:clean, :concat, :dist]

desc "Clean the distribution directory."
task :clean do
  rm_rf ISHAKE_DIST_DIR
  mkdir ISHAKE_DIST_DIR
end

def normalize_whitespace(filename)
  contents = File.readlines(filename)
  contents.each { |line| line.sub!(/\s+$/, "") }
  File.open(filename, "w") do |file|
    file.write contents.join("\n").sub(/(\n+)?\Z/m, "\n")
  end
end

desc "Strip trailing whitespace and ensure each file ends with a newline"
task :whitespace do
  Dir["*", "src/**/*", "test/**/*", "examples/**/*"].each do |filename|
    normalize_whitespace(filename) if File.file?(filename)
  end
end

desc "Concatenate source files to build ishake.js"
task :concat, [:addons] => :whitespace do |task, args|
  # colon-separated arguments such as `concat[foo:bar:-baz]` specify
  # which components to add or exclude, depending on if it starts with "-"
  add, exclude = args[:addons].to_s.split(':').partition {|c| c !~ /^-/ }
  exclude.each {|c| c.sub!('-', '') }
  components = (ISHAKE_COMPONENTS | add) - exclude

  unless components == ISHAKE_COMPONENTS
    puts "Building ishake.js by including: #{components.join(', ')}"
  end

  File.open(File.join(ISHAKE_DIST_DIR, 'ishake.js'), 'w') do |f|
    f.puts components.map { |component|
      File.read File.join(ISHAKE_SRC_DIR, "#{component}.js")
    }
  end
end

def uglifyjs(src, target)
  begin
    require 'uglifier'
  rescue LoadError => e
    if verbose
      puts "\nYou'll need the 'uglifier' gem for minification. Just run:\n\n"
      puts "  $ gem install uglifier"
      puts "\nand you should be all set.\n\n"
      exit
    end
    return false
  end
  puts "Minifying #{src} with UglifyJS..."
  File.open(target, "w"){|f| f.puts Uglifier.new.compile(File.read(src))}
end

def process_minified(src, target)
  cp target, File.join(ISHAKE_DIST_DIR,'temp.js')
  msize = File.size(File.join(ISHAKE_DIST_DIR,'temp.js'))
  `gzip -9 #{File.join(ISHAKE_DIST_DIR,'temp.js')}`

  osize = File.size(src)
  dsize = File.size(File.join(ISHAKE_DIST_DIR,'temp.js.gz'))
  rm_rf File.join(ISHAKE_DIST_DIR,'temp.js.gz')

  puts "Original version: %.3fk" % (osize/1024.0)
  puts "Minified: %.3fk" % (msize/1024.0)
  puts "Minified and gzipped: %.3fk, compression factor %.3f" % [dsize/1024.0, osize/dsize.to_f]
end

desc "Generates a minified version for distribution, using UglifyJS."
task :dist do
  src, target = File.join(ISHAKE_DIST_DIR,'ishake.js'), File.join(ISHAKE_DIST_DIR,'ishake.min.js')
  uglifyjs src, target
  process_minified src, target
end
